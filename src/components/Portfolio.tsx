import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: 'Credit Card Fraud Detection System',
      description: 'Advanced ML-based solution using neural networks and anomaly detection algorithms to identify fraudulent transactions in real-time.',
      tags: ['Machine Learning', 'Python', 'Neural Networks', 'Data Analysis'],
      type: 'AI/ML Project',
      featured: true
    },
    {
      title: 'NGO Website Development',
      description: 'Professional website built for a non-profit organization with modern design, donation system, and volunteer management features.',
      tags: ['React', 'Node.js', 'MongoDB', 'Payment Integration'],
      type: 'Web Development',
      featured: false
    },
    {
      title: 'UK eLogistics Delivery Prediction',
      description: 'Data-driven optimization system for predicting delivery timing and route optimization for a UK-based logistics company.',
      tags: ['Predictive Analytics', 'Python', 'Data Science', 'API Integration'],
      type: 'Data Science',
      featured: true
    },
    {
      title: 'Automation Framework Suite',
      description: 'Comprehensive test automation framework supporting web, mobile, and API testing with Azure DevOps integration.',
      tags: ['Selenium', 'C#', 'Appium', 'Azure DevOps'],
      type: 'Automation',
      featured: false
    },
    {
      title: 'AI-Driven Test Optimizer',
      description: 'Intelligent test case optimization using machine learning to reduce test execution time and improve coverage.',
      tags: ['AI', 'Test Automation', 'Machine Learning', 'Optimization'],
      type: 'AI Automation',
      featured: true
    },
    {
      title: 'Microservices Testing Platform',
      description: 'End-to-end testing solution for Azure microservices with automated deployment and comprehensive reporting.',
      tags: ['Microservices', 'Azure', 'RestSharp', 'CI/CD'],
      type: 'Cloud Testing',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-2">🎯 PROJECTS FEATURED</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            OUR FEATURES <span className="text-gradient">PROJECTS</span>
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={index} className="card-gradient group">
              <div className="mb-4">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-6xl opacity-50">
                    {project.type === 'AI/ML Project' && '🧠'}
                    {project.type === 'Data Science' && '📊'}
                    {project.type === 'AI Automation' && '🤖'}
                  </div>
                </div>
                <span className="text-accent text-sm font-medium">{project.type}</span>
                <h3 className="font-bold text-foreground text-xl mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs bg-secondary/50 text-muted-foreground px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3">
                <Button variant="outline" size="sm" className="flex-1">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="card-accent group">
                <div className="mb-4">
                  <span className="text-accent text-sm font-medium">{project.type}</span>
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-secondary/30 text-muted-foreground px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <Button variant="ghost" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="btn-hero group">
            View More Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
