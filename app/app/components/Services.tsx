import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Globe, Smartphone, Zap } from "lucide-react"

const services = [
  {
    title: "Custom Web Design",
    description: "Unique designs tailored to your brand and goals",
    icon: Globe,
  },
  {
    title: "Responsive Development",
    description: "Websites that look great on all devices",
    icon: Smartphone,
  },
  {
    title: "Performance Optimization",
    description: "Fast-loading sites for better user experience",
    icon: Zap,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <service.icon className="w-10 h-10 mb-4 text-primary" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

