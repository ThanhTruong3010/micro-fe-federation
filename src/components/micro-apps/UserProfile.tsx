import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Settings, Award, Users, Calendar } from "lucide-react";

const userStats = [
  { label: "Profile Completion", value: 85, icon: "📊" },
  { label: "Activity Level", value: 92, icon: "⚡" },
  { label: "Community Score", value: 78, icon: "🌟" }
];

const achievements = [
  { name: "Early Adopter", icon: "🚀", earned: true },
  { name: "Team Player", icon: "🤝", earned: true },
  { name: "Top Contributor", icon: "🏆", earned: false },
  { name: "Mentor", icon: "👨‍🏫", earned: true },
];

export const UserProfile = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
            User Profile
          </h2>
          <p className="text-muted-foreground">Micro-app: Standalone user management</p>
        </div>
        <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
          Micro App
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="lg:col-span-1 bg-gradient-glass backdrop-blur-glass border-border/20">
          <div className="p-6 text-center space-y-4">
            <Avatar className="w-24 h-24 mx-auto ring-4 ring-primary/20">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="text-2xl bg-gradient-primary">JD</AvatarFallback>
            </Avatar>
            
            <div>
              <h3 className="text-xl font-bold text-foreground">John Doe</h3>
              <p className="text-muted-foreground">Senior Developer</p>
              <Badge className="mt-2 bg-accent/20 text-accent">Pro Member</Badge>
            </div>

            <div className="flex justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>1.2k</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>2 years</span>
              </div>
            </div>

            <Button className="w-full bg-gradient-accent hover:shadow-glow transition-all duration-300">
              <Settings className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </Card>

        {/* Stats & Achievements */}
        <div className="lg:col-span-2 space-y-6">
          {/* Progress Stats */}
          <Card className="bg-gradient-glass backdrop-blur-glass border-border/20">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Progress Stats</h3>
              <div className="space-y-4">
                {userStats.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{stat.icon}</span>
                        <span className="text-sm font-medium text-foreground">{stat.label}</span>
                      </div>
                      <span className="text-sm text-primary font-semibold">{stat.value}%</span>
                    </div>
                    <Progress value={stat.value} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Achievements */}
          <Card className="bg-gradient-glass backdrop-blur-glass border-border/20">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-foreground">
                <Award className="w-5 h-5 text-accent" />
                Achievements
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-300 ${
                      achievement.earned
                        ? 'bg-accent/10 border-accent/20 text-foreground'
                        : 'bg-muted/5 border-border/20 text-muted-foreground opacity-50'
                    }`}
                  >
                    <span className="text-2xl">{achievement.icon}</span>
                    <span className="text-sm font-medium">{achievement.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};