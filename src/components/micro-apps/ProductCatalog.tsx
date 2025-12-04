import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Eye } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 199.99,
    rating: 4.8,
    image: "🎧",
    category: "Electronics",
    inStock: true
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 299.99,
    rating: 4.6,
    image: "⌚",
    category: "Wearables",
    inStock: true
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 89.99,
    rating: 4.9,
    image: "💻",
    category: "Accessories",
    inStock: false
  }
];

export const ProductCatalog = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Product Catalog
          </h2>
          <p className="text-muted-foreground">Micro-app: Independent product module</p>
        </div>
        <Badge variant="secondary" className="bg-gradient-accent text-accent-foreground">
          Micro App
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group relative overflow-hidden bg-gradient-glass backdrop-blur-glass border-border/20 hover:shadow-glow transition-all duration-300">
            <div className="p-6">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {product.image}
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="text-sm text-muted-foreground">{product.rating}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground">{product.name}</h3>
                  <p className="text-2xl font-bold text-primary">${product.price}</p>
                </div>

                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                  <Button size="sm" variant="outline" className="border-border/20">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};