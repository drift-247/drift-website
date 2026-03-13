import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
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
import { motion } from "framer-motion";

export function WaitlistModal({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-6 rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-extrabold text-slate-900 text-center">
            Join the Waitlist
          </DialogTitle>
          <p className="text-slate-500 text-sm text-center mt-1">
            Be the first to experience the future of secure ride-hailing.
          </p>
        </DialogHeader>
        <form className="space-y-5 mt-2">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="font-semibold text-slate-700">Full Name</Label>
            <Input id="fullName" placeholder="John Doe" className="h-12 rounded-xl bg-slate-50 border-slate-200" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-semibold text-slate-700">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" className="h-12 rounded-xl bg-slate-50 border-slate-200" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="font-semibold text-slate-700">Phone</Label>
              <Input id="phone" type="tel" placeholder="+234..." className="h-12 rounded-xl bg-slate-50 border-slate-200" />
            </div>
          </div>
          
          <div className="space-y-3">
            <Label className="font-semibold text-slate-700">I'm interested as a:</Label>
            <div className="flex gap-4">
              {["Rider", "Driver"].map((role) => (
                <label
                  key={role}
                  className="flex-1 flex items-center justify-center border-2 border-slate-200 rounded-xl p-3 cursor-pointer hover:border-[#003366] hover:bg-blue-50 transition-all font-semibold text-slate-700 text-sm"
                >
                  <input
                    type="radio"
                    name="role"
                    value={role.toLowerCase()}
                    className="hidden"
                    defaultChecked={role === "Rider"}
                  />
                  {role}
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label className="font-semibold text-slate-700">City</Label>
            <Select>
              <SelectTrigger className="h-12 rounded-xl bg-slate-50 border-slate-200">
                <SelectValue placeholder="Select your city" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lagos">Lagos</SelectItem>
                <SelectItem value="abuja">Abuja</SelectItem>
                <SelectItem value="ph">Port Harcourt</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-start space-x-3 pt-1">
            <Checkbox id="updates" className="mt-0.5" />
            <div>
              <label htmlFor="updates" className="text-sm font-semibold text-slate-900 cursor-pointer">
                Keep me updated
              </label>
              <p className="text-xs text-slate-400">
                Get launch announcements and early access invites.
              </p>
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button className="w-full h-14 text-base font-bold bg-[#003366] hover:bg-[#002244] text-white rounded-xl shadow-lg">
              Secure My Spot
            </Button>
          </motion.div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
