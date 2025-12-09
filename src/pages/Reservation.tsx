import { useState } from 'react';
import { Calendar, Clock, Users, MessageCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const timeSlots = [
  '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM',
  '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM',
];

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.guests) {
      toast({
        title: 'Please fill all required fields',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: 'Reservation Submitted!',
      description: 'We will confirm your reservation shortly.',
    });
  };

  const handleWhatsAppConfirm = () => {
    const message = encodeURIComponent(
      `Hi! I'd like to confirm my reservation at Aurum:\n\nName: ${formData.name}\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}\n\nLooking forward to dining with you!`
    );
    window.open(`https://wa.me/15551234567?text=${message}`, '_blank');
  };

  if (isSubmitted) {
    return (
      <main className="pt-20 min-h-screen bg-background flex items-center justify-center">
        <div className="container-custom">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h1 className="text-4xl font-display font-bold text-foreground mb-4">
              Reservation Received!
            </h1>
            <p className="text-muted-foreground mb-8">
              Thank you, {formData.name}! Your reservation for {formData.guests} guests on {formData.date} at {formData.time} has been submitted. 
              We'll send a confirmation to {formData.email} shortly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gold" onClick={handleWhatsAppConfirm}>
                <MessageCircle className="w-4 h-4 mr-2" />
                Confirm via WhatsApp
              </Button>
              <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                Make Another Reservation
              </Button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-20 bg-charcoal">
        <div className="container-custom text-center">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Join Us
          </p>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            Reserve Your Table
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Secure your place for an unforgettable dining experience. 
            We recommend booking at least 48 hours in advance.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info */}
              <div className="space-y-6">
                <h2 className="text-2xl font-display font-semibold text-foreground border-b border-border pb-4">
                  Your Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 555 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Reservation Details */}
              <div className="space-y-6">
                <h2 className="text-2xl font-display font-semibold text-foreground border-b border-border pb-4">
                  Reservation Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      Date *
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      Time *
                    </Label>
                    <Select
                      value={formData.time}
                      onValueChange={(value) => setFormData({ ...formData, time: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      Guests *
                    </Label>
                    <Select
                      value={formData.guests}
                      onValueChange={(value) => setFormData({ ...formData, guests: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Number of guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </SelectItem>
                        ))}
                        <SelectItem value="9+">9+ Guests (Private Dining)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="requests">Special Requests (Optional)</Label>
                  <textarea
                    id="requests"
                    className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Dietary requirements, special occasions, seating preferences..."
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  />
                </div>
              </div>

              <Button type="submit" variant="gold" size="xl" className="w-full">
                Request Reservation
              </Button>
            </form>

            {/* Additional Info */}
            <div className="mt-12 p-6 bg-card border border-border rounded-lg">
              <h3 className="font-display font-semibold text-foreground mb-4">
                Reservation Policy
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Reservations are held for 15 minutes past the scheduled time</li>
                <li>• For parties of 9 or more, please contact us directly</li>
                <li>• Dress code: Smart Casual to Formal</li>
                <li>• Cancellation: Please notify us 24 hours in advance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
