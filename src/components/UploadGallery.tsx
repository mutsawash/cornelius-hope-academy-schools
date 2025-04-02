
import { useState, useEffect } from "react";
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
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();

  // Load existing images from localStorage
  useEffect(() => {
    const storedImages = localStorage.getItem("galleryImages");
    if (storedImages) {
      setImages(JSON.parse(storedImages));
    }
  }, []);

  const handleAddImage = () => {
    if (!title || !category || !imageUrl) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const newImage: GalleryImage = {
      id: Date.now().toString(),
      url: imageUrl,
      title,
      category,
    };

    const updatedImages = [...images, newImage];
    setImages(updatedImages);
    localStorage.setItem("galleryImages", JSON.stringify(updatedImages));

    // Reset form
    setTitle("");
    setCategory("");
    setImageUrl("");

    toast({
      title: "Image added",
      description: "The image has been added to the gallery",
    });
  };

  const handleDeleteImage = (id: string) => {
    const updatedImages = images.filter(image => image.id !== id);
    setImages(updatedImages);
    localStorage.setItem("galleryImages", JSON.stringify(updatedImages));

    toast({
      title: "Image removed",
      description: "The image has been removed from the gallery",
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
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Manage Gallery Images</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
            {images.length === 0 ? (
              <p className="text-center text-gray-500 py-4">No images added yet</p>
            ) : (
              images.map((image) => (
                <div key={image.id} className="flex items-center gap-3 border p-2 rounded-md">
                  <img 
                    src={image.url} 
                    alt={image.title} 
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-grow">
                    <p className="font-medium">{image.title}</p>
                    <p className="text-sm text-gray-500">
                      {image.category === "primary" ? "Primary" : "Secondary"} School
                    </p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => handleDeleteImage(image.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UploadGallery;
