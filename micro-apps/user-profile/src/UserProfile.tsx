import { User, Edit, Award, TrendingUp, Star, Trophy, Target } from "lucide-react";

const userStats = [
  { label: "Projects Completed", value: 42, icon: Target },
  { label: "Skills Mastered", value: 15, icon: Star },
  { label: "Experience Level", value: 78, icon: TrendingUp },
];

const achievements = [
  { name: "First Project", icon: Trophy, earned: true },
  { name: "Team Player", icon: Award, earned: true },
  { name: "Innovation Leader", icon: Star, earned: false },
  { name: "Mentor", icon: User, earned: true },
];

export const UserProfile = () => {
  return (
    <div className="space-y-8 p-6">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 border border-green-500/30">
          👤 Micro App
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          User Profile
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Manage your profile and track your progress
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-blue-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <User className="w-16 h-16 text-gray-300" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Sarah Johnson</h3>
              <p className="text-gray-300 mb-2">Senior Frontend Developer</p>
              <p className="text-sm text-gray-400 mb-4">Member since March 2023</p>
              <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-lg font-medium transition-all duration-200">
                <Edit className="w-4 h-4" />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span>Progress Statistics</span>
            </h4>
            <div className="space-y-6">
              {userStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon className="w-4 h-4 text-blue-400" />
                        <span className="text-gray-300">{stat.label}</span>
                      </div>
                      <span className="text-white font-semibold">{stat.value}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${stat.value}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <span>Achievements</span>
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border transition-all duration-200 ${
                      achievement.earned
                        ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30 text-yellow-300'
                        : 'bg-gray-800/50 border-gray-600/50 text-gray-500'
                    }`}
                  >
                    <div className="flex flex-col items-center space-y-2 text-center">
                      <Icon className={`w-8 h-8 ${achievement.earned ? 'text-yellow-400' : 'text-gray-500'}`} />
                      <span className="text-sm font-medium">{achievement.name}</span>
                      {achievement.earned && (
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;