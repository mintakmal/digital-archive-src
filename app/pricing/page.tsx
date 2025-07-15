import { Header } from '@/components/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: 'Free',
      price: 0,
      description: 'Perfect for getting started',
      features: [
        'Access to free files',
        'Basic download speeds',
        'Community support',
        'Limited downloads per day',
      ],
      popular: false,
    },
    {
      name: 'Pro',
      price: 299,
      description: 'Best for regular users',
      features: [
        'Access to all paid files',
        'High-speed downloads',
        'Priority support',
        'Unlimited downloads',
        'Early access to new files',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      price: 599,
      description: 'For power users and teams',
      features: [
        'Access to all files including premium',
        'Ultra-fast downloads',
        'Dedicated support',
        'Unlimited downloads',
        'Early access to new files',
        'Commercial license included',
        'Bulk download options',
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the perfect plan for your needs and get access to thousands of premium digital files
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative ${plan.popular ? 'border-blue-500 shadow-lg scale-105' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">₹{plan.price}</span>
                  {plan.price > 0 && <span className="text-muted-foreground">/month</span>}
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.price === 0 ? 'Get Started' : 'Choose Plan'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="font-semibold mb-2">Can I change my plan anytime?</h3>
              <p className="text-muted-foreground text-sm">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground text-sm">
                We accept all major credit cards, debit cards, and UPI payments through our secure payment gateway.
              </p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold mb-2">Is there a free trial?</h3>
              <p className="text-muted-foreground text-sm">
                Yes, you can start with our free plan and upgrade anytime. No credit card required for the free tier.
              </p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold mb-2">Do you offer refunds?</h3>
              <p className="text-muted-foreground text-sm">
                We offer a 30-day money-back guarantee for all paid plans. Contact support for assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}