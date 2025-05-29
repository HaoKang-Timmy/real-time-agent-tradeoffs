
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Clock, Target, Zap, TrendingUp, Users, Award } from "lucide-react";

const Index = () => {
  const authors = [
    "Hao Kang", "Qingru Zhang", "Han Cai", "Weiyuan Xu", 
    "Tushar Krishna", "Yilun Du", "Tachy Weissman"
  ];

  const keyFindings = [
    {
      icon: Clock,
      title: "Latency-Accuracy Trade-off",
      description: "First systematic study of speed vs. accuracy in real-time LLM agent decisions",
      metric: "Up to 80% yield improvement"
    },
    {
      icon: Target,
      title: "Competitive Gaming Performance",
      description: "Demonstrated significant performance gains in StreetFighter platform",
      metric: "26.52% win rate increase"
    },
    {
      icon: TrendingUp,
      title: "High-Frequency Trading",
      description: "Real-world application showing practical impact in financial markets",
      metric: "Optimal latency-quality balance"
    }
  ];

  const applications = [
    { name: "High-Frequency Trading", description: "Financial market decision making under time pressure" },
    { name: "Competitive Gaming", description: "Real-time strategy and action games like StreetFighter" },
    { name: "Autonomous Systems", description: "Real-time decision making for robotics and AI agents" },
    { name: "Live Recommendation", description: "Dynamic content recommendation with latency constraints" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">
            MLSys Research • May 2025
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Win Fast or Lose Slow
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 font-medium">
            Balancing Speed and Accuracy in Latency-Sensitive Decisions of LLMs
          </h2>
          
          {/* Authors */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {authors.map((author, index) => (
              <Badge key={index} variant="outline" className="text-sm">
                {author}
              </Badge>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Award className="mr-2 h-5 w-5" />
              Read Paper
            </Button>
            <Button size="lg" variant="outline">
              <Users className="mr-2 h-5 w-5" />
              View Code
            </Button>
          </div>
        </div>

        {/* Abstract Card */}
        <Card className="mb-12 shadow-lg border-0 bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Abstract</CardTitle>
          </CardHeader>
          <CardContent className="text-lg leading-relaxed text-gray-700">
            <p className="mb-4">
              Large language models (LLMs) have shown remarkable performance across diverse reasoning and generation tasks, and are increasingly deployed as agents in dynamic environments such as code generation and recommendation systems. However, many real-world applications, such as high-frequency trading and real-time competitive gaming, require decisions under strict latency constraints, where faster responses directly translate into higher rewards.
            </p>
            <p className="mb-4">
              Despite the importance of this latency-quality trade-off, it remains underexplored in the context of LLM-based agents. In this work, we present the <strong>first systematic study</strong> of this trade-off in real-time decision-making tasks.
            </p>
            <p>
              To support our investigation, we introduce two new benchmarks: <strong>HFTBench</strong>, a high-frequency trading simulation, and <strong>StreetFighter</strong>, a competitive gaming platform. Our analysis reveals that optimal latency-quality balance varies by task, and that sacrificing quality for lower latency can significantly enhance downstream performance.
            </p>
          </CardContent>
        </Card>

        {/* Key Findings */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">Key Findings</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {keyFindings.map((finding, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <finding.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{finding.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{finding.description}</p>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    {finding.metric}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Innovation Highlight */}
        <Card className="mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
          <CardContent className="p-8 text-center">
            <Zap className="mx-auto h-16 w-16 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Opening New Research Directions</h3>
            <p className="text-xl leading-relaxed">
              This work represents the <strong>first comprehensive evaluation</strong> of latency-accuracy trade-offs 
              in real-time agent deployment, establishing new benchmarks and methodologies for the MLSys community.
            </p>
          </CardContent>
        </Card>

        {/* Applications */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">Real-World Applications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {applications.map((app, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{app.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{app.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Methodology Preview */}
        <Card className="mb-12 border-0 bg-white/70 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Methodology Overview</CardTitle>
            <CardDescription className="text-lg">
              Introducing FPX: An adaptive framework for optimal latency-quality balance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-600">HFTBench</h4>
                <p className="text-gray-600">
                  High-frequency trading simulation benchmark that evaluates agent performance 
                  under realistic market conditions with strict latency requirements.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-600">StreetFighter Platform</h4>
                <p className="text-gray-600">
                  Competitive gaming environment testing real-time decision making 
                  in adversarial settings with immediate feedback loops.
                </p>
              </div>
            </div>
            <Separator />
            <div className="text-center">
              <h4 className="font-semibold text-lg mb-3 text-indigo-600">FPX Framework</h4>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our proposed adaptive framework dynamically selects model size and quantization 
                level based on real-time demands, achieving optimal performance across both benchmarks.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Impact Statement */}
        <Card className="text-center border-0 bg-gradient-to-r from-green-50 to-emerald-50">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Research Impact</h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              This groundbreaking work establishes the foundation for <strong>latency-aware evaluation</strong> 
              and deployment strategies for LLM-based agents, opening new research directions in the 
              intersection of machine learning systems and real-time applications.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
