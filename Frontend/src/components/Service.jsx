import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import EditNoteIcon from '@mui/icons-material/EditNote';
import SecurityIcon from '@mui/icons-material/Security';
import WidthFullIcon from '@mui/icons-material/WidthFull';
import TelegramIcon from '@mui/icons-material/Telegram';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';

const ServicesSection = () => {
  return (
    <section className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          How can we help you?
          </h2>
          <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore our wide range of services to find the perfect solution for
            your needs.
          </p>
        </div>
        <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto mt-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
          {/* Cloud Technologies */}
          <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-lg">
            <div className="text-left">
              <h3 className="text-lg font-bold"><EditNoteIcon/> Cloud Technologies</h3>
              <p className="text-sm text-muted-foreground">
                Leverage the power of the cloud to scale and optimize your business.
              </p>
              <Link
                to="#"
                className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Learn More
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Cloud Security */}
          <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-lg">
            <div className="text-left">
            
              <h3 className="text-lg font-bold"><SecurityIcon/> Cloud Security</h3>
              <p className="text-sm text-muted-foreground">
                Ensure your cloud infrastructure and data are secure.
              </p>
              <Link
                to="#"
                className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Learn More
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Full Stack Development */}
          <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-lg">
            <div className="text-left">
              <h3 className="text-lg font-bold"><WidthFullIcon/> Full Stack Development</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive development solutions covering both frontend and backend.
              </p>
              <Link
                to="#"
                className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Learn More
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* BI Consulting */}
          <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-lg">
            <div className="text-left">
              <h3 className="text-lg font-bold"><TelegramIcon/> BI Consulting</h3>
              <p className="text-sm text-muted-foreground">
                Business Intelligence strategies and consulting services.
              </p>
              <Link
                to="#"
                className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Learn More
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* DevOps */}
          <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-lg">
            <div className="text-left">
              <h3 className="text-lg font-bold"><DeveloperBoardIcon/> DevOps</h3>
              <p className="text-sm text-muted-foreground">
                Improve collaboration and efficiency between development and operations.
              </p>
              <Link
                to="#"
                className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Learn More
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Application Monitoring */}
          <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-lg">
            <div className="text-left">
              <h3 className="text-lg font-bold"><MonitorHeartIcon/> Application Monitoring</h3>
              <p className="text-sm text-muted-foreground">
                Ensure performance and stability of your applications.
              </p>
              <Link
                to="#"
                className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Learn More
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
