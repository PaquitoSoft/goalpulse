import { Bell, Globe, Moon, User, Info, LogOut } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';

export function Settings() {
  return (
    <div className="flex flex-col h-full bg-secondary/30">
      <div className="bg-white border-b border-border p-4">
        <h1 className="text-lg font-semibold">Settings</h1>
        <p className="text-sm text-muted-foreground">Customize your experience</p>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-4">
        {/* Profile Section */}
        <Card className="p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <User className="text-primary-foreground" size={20} />
            </div>
            <div>
              <h3 className="font-semibold">Football Fan</h3>
              <p className="text-sm text-muted-foreground">Manage your profile</p>
            </div>
          </div>
        </Card>

        {/* Preferences */}
        <Card className="p-4 space-y-4">
          <h3 className="font-semibold">Preferences</h3>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bell size={20} className="text-muted-foreground" />
              <div>
                <p className="font-medium">Push Notifications</p>
                <p className="text-sm text-muted-foreground">Get notified of goals and results</p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Moon size={20} className="text-muted-foreground" />
              <div>
                <p className="font-medium">Dark Mode</p>
                <p className="text-sm text-muted-foreground">Switch to dark theme</p>
              </div>
            </div>
            <Switch />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Globe size={20} className="text-muted-foreground" />
              <div>
                <p className="font-medium">Language</p>
                <p className="text-sm text-muted-foreground">English</p>
              </div>
            </div>
          </div>
        </Card>

        {/* About */}
        <Card className="p-4 space-y-3">
          <h3 className="font-semibold">About</h3>

          <button className="flex items-center space-x-3 w-full text-left">
            <Info size={20} className="text-muted-foreground" />
            <div>
              <p className="font-medium">App Info</p>
              <p className="text-sm text-muted-foreground">Version 1.0.0</p>
            </div>
          </button>

          <Separator />

          <button className="flex items-center space-x-3 w-full text-left text-destructive">
            <LogOut size={20} />
            <p className="font-medium">Sign Out</p>
          </button>
        </Card>
      </div>
    </div>
  );
}
