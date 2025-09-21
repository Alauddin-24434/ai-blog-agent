import { Button } from "@/components/ui/button"
import { Search, User, Settings } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">BA</span>
              </div>
              <span className="text-xl font-bold gradient-text">Blog Agent</span>
            </div>

           
          </div>

          <div className="flex items-center gap-4">
       
   
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
