
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Image, X, UploadCloud, PlusCircle, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
}

const UploadGallery = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [uploadType, setUploadType] = useState<"url" | "file">("url");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Load existing images from localStorage
  useEffect(() => {
    const storedImages = localStorage.getItem("galleryImages");
    if (storedImages) {
      setImages(JSON.parse(storedImages));
    }
  }, []);

  const handleAddImage = () => {
    if (!title || !category) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    if (uploadType === "url" && !imageUrl) {
      toast({
        title: "Missing image URL",
        description: "Please enter an image URL",
        variant: "destructive",
      });
      return;
    }

    if (uploadType === "file" && !fileInputRef.current?.files?.[0]) {
      toast({
        title: "No file selected",
        description: "Please select an image file to upload",
        variant: "destructive",
      });
      return;
    }

    // For file uploads, we would typically upload to a server here
    // Since we're working locally, we'll create a data URL from the file
    if (uploadType === "file" && fileInputRef.current?.files?.[0]) {
      const file = fileInputRef.current.files[0];
      const reader = new FileReader();
      
      reader.onloadend = () => {
        const fileUrl = reader.result as string;
        addImageToGallery(fileUrl);
      };
      
      reader.readAsDataURL(file);
    } else {
      // For URL uploads
      addImageToGallery(imageUrl);
    }
  };
  
  const addImageToGallery = (imageSource: string) => {
    const newImage: GalleryImage = {
      id: Date.now().toString(),
      url: imageSource,
      title,
      category,
    };

    const updatedImages = [...images, newImage];
    setImages(updatedImages);
    localStorage.setItem("galleryImages", JSON.stringify(updatedImages));

    // Trigger an event to notify components that gallery images have been updated
    window.dispatchEvent(new Event('galleryImagesUpdated'));

    // Reset form
    setTitle("");
    setCategory("");
    setImageUrl("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    toast({
      title: "Image added",
      description: "The image has been added to the gallery and slideshow",
    });
  };

  const handleDeleteImage = (id: string) => {
    const updatedImages = images.filter(image => image.id !== id);
    setImages(updatedImages);
    localStorage.setItem("galleryImages", JSON.stringify(updatedImages));
    
    // Trigger an event to notify components that gallery images have been updated
    window.dispatchEvent(new Event('galleryImagesUpdated'));

    toast({
      title: "Image removed",
      description: "The image has been removed from the gallery and slideshow",
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Upload New Image</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-2 mb-4">
              <Button 
                variant={uploadType === "url" ? "default" : "outline"} 
                onClick={() => setUploadType("url")}
                className="flex-1"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                URL
              </Button>
              <Button 
                variant={uploadType === "file" ? "default" : "outline"} 
                onClick={() => setUploadType("file")}
                className="flex-1"
              >
                <UploadCloud className="mr-2 h-4 w-4" />
                Upload File
              </Button>
            </div>
            
            {uploadType === "url" && (
              <div className="space-y-2">
                <Label htmlFor="imageUrl">Image URL</Label>
                <Input
                  id="imageUrl"
                  placeholder="https://example.com/image.jpg"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
                <p className="text-xs text-gray-500">
                  Enter a URL for your image (from an external hosting service)
                </p>
              </div>
            )}
            
            {uploadType === "file" && (
              <div className="space-y-2">
                <Label htmlFor="imageFile">Upload Image</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center">
                  <UploadCloud className="h-10 w-10 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 mb-2">Click to browse or drag and drop</p>
                  <Input
                    id="imageFile"
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        // Preview would typically go here in a real app
                      }
                    }}
                  />
                  <Button 
                    variant="outline" 
                    onClick={() => fileInputRef.current?.click()}
                    size="sm"
                  >
                    Select Image
                  </Button>
                </div>
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="title">Image Title</Label>
              <Input
                id="title"
                placeholder="Sports Day 2023"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select 
                value={category} 
                onValueChange={setCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="primary">Primary School</SelectItem>
                  <SelectItem value="secondary">Secondary School</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button onClick={handleAddImage} className="w-full">Add Image</Button>
            <p className="text-xs text-gray-500 text-center">
              Images added here will appear in both the gallery and homepage slideshow
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Manage Gallery Images</CardTitle>
        </CardHeader>
        <CardContent>
          {images.length === 0 ? (
            <div className="text-center py-8">
              <Image className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No images added yet</p>
              <p className="text-sm text-gray-400 mt-2">Upload images to display in the gallery and slideshows</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                {images.map((image) => (
                  <div 
                    key={image.id} 
                    className="relative group cursor-pointer border rounded-md overflow-hidden"
                    onClick={() => setSelectedImage(image.url)}
                  >
                    <img 
                      src={image.url} 
                      alt={image.title} 
                      className="w-full h-24 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2">
                      <Button 
                        variant="destructive" 
                        size="icon" 
                        className="h-6 w-6 self-end"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteImage(image.id);
                        }}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                      <p className="text-xs text-white truncate">{image.title}</p>
                    </div>
                  </div>
                ))}
                {images.length > 0 && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="border-2 border-dashed border-gray-300 rounded-md h-24 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                        <PlusCircle className="h-8 w-8 text-gray-400 mb-1" />
                        <p className="text-xs text-gray-500">Add Image</p>
                      </div>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add a new image</DialogTitle>
                        <DialogDescription>
                          Upload a new image to the gallery
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 pt-4">
                        {/* Simplified upload form in dialog */}
                        <div className="space-y-2">
                          <Label htmlFor="quickUpload">Image File</Label>
                          <Input
                            id="quickUpload"
                            type="file"
                            accept="image/*"
                          />
                        </div>
                        <Button className="w-full">Upload</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
              
              {/* Image preview dialog */}
              <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <DialogTitle>Image Preview</DialogTitle>
                  </DialogHeader>
                  {selectedImage && (
                    <div className="flex justify-center p-2">
                      <img 
                        src={selectedImage} 
                        alt="Preview" 
                        className="max-h-[70vh] object-contain"
                      />
                    </div>
                  )}
                  <Button variant="outline" onClick={() => setSelectedImage(null)}>Close</Button>
                </DialogContent>
              </Dialog>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                Click on an image to preview it in full size
              </p>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UploadGallery;
