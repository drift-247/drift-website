import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";

export default function EarlyAccessSection() {
  return (
    <section className="w-full py-24 bg-slate-50 flex justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 w-full max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Get Early Access
          </h2>
          <p className="text-slate-600">
            Be the first to experience the future of secure ride-hailing.
          </p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              placeholder="John Doe"
              className="h-12 bg-slate-50"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="h-12 bg-slate-50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+234..."
                className="h-12 bg-slate-50"
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label>I am interested as a:</Label>
            <div className="flex gap-4">
              <label className="flex-1 flex items-center justify-center border border-blue-200 bg-blue-50 text-[#002244] rounded-lg p-3 cursor-pointer hover:bg-blue-100 transition-colors">
                <input
                  type="radio"
                  name="role"
                  value="rider"
                  className="hidden"
                  defaultChecked
                />
                <span className="font-medium">Rider</span>
              </label>
              <label className="flex-1 flex items-center justify-center border border-slate-200 text-slate-700 rounded-lg p-3 cursor-pointer hover:bg-slate-50 transition-colors">
                <input
                  type="radio"
                  name="role"
                  value="driver"
                  className="hidden"
                />
                <span className="font-medium">Driver</span>
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <Label>City</Label>
            <Select>
              <SelectTrigger className="h-12 bg-slate-50">
                <SelectValue placeholder="Select your city" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lagos">Lagos</SelectItem>
                <SelectItem value="abuja">Abuja</SelectItem>
                <SelectItem value="ph">Port Harcourt</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-start space-x-3 pt-2 pb-4">
            <Checkbox id="terms" className="mt-1" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-900"
              >
                Keep me updated
              </label>
              <p className="text-sm text-slate-500">
                Get the latest news and launch announcements.
              </p>
            </div>
          </div>

          <Button className="w-full h-14 text-lg bg-[#003366] hover:bg-[#002244] text-white rounded-lg">
            Get Early Access
          </Button>
        </form>
      </div>
    </section>
  );
}
