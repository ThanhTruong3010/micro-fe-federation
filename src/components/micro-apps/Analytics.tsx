import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Users, ShoppingBag, DollarSign, Activity } from "lucide-react";

const metrics = [
  {
    title: "Total Revenue",
    value: "$12,345",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "text-green-400"
  },
  {
    title: "Active Users",
    value: "8,432",
    change: "+8.2%",
    trend: "up",
    icon: Users,
    color: "text-blue-400"
  },
  {
    title: "Orders",
    value: "1,234",
    change: "-3.1%",
    trend: "down",
    icon: ShoppingBag,
    color: "text-orange-400"
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    change: "+0.5%",
    trend: "up",
    icon: Activity,
    color: "text-purple-400"
  }
];

const chartData = [
  { month: "Jan", value: 65 },
  { month: "Feb", value: 78 },
  { month: "Mar", value: 52 },
  { month: "Apr", value: 91 },
  { month: "May", value: 87 },
  { month: "Jun", value: 94 }
];

export const Analytics = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Analytics Dashboard
          </h2>
          <p className="text-muted-foreground">Micro-app: Real-time analytics module</p>
        </div>
        <Badge variant="secondary" className="bg-gradient-accent text-accent-foreground">
          Micro App
        </Badge>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <Card key={index} className="group relative overflow-hidden bg-gradient-glass backdrop-blur-glass border-border/20 hover:shadow-glow transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg bg-background/10 ${metric.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1">
                    {metric.trend === "up" ? (
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-400" />
                    )}
                    <span className={`text-sm font-medium ${
                      metric.trend === "up" ? "text-green-400" : "text-red-400"
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{metric.value}</h3>
                  <p className="text-sm text-muted-foreground">{metric.title}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Chart Visualization */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-glass backdrop-blur-glass border-border/20">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Performance Chart</h3>
            <div className="space-y-4">
              {chartData.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="text-sm font-medium text-muted-foreground w-8">
                    {item.month}
                  </span>
                  <div className="flex-1 bg-muted/20 rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-primary w-8">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-glass backdrop-blur-glass border-border/20">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Actions</h3>
            <div className="space-y-3">
              <Button className="w-full justify-start bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <Activity className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
              <Button variant="outline" className="w-full justify-start border-border/20">
                <TrendingUp className="w-4 h-4 mr-2" />
                View Trends
              </Button>
              <Button variant="outline" className="w-full justify-start border-border/20">
                <Users className="w-4 h-4 mr-2" />
                User Insights
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};