import getIconUrl from 'tech-stack-icons';

// Helper function to create a technology object with custom icon handling
const createTech = (name, customIcon = '') => {
  const normalizedName = name.toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .replace('dotnet', 'dot-net')
    .replace('nodejs', 'node-js')
    .replace('nextjs', 'next-js')
    .replace('reactjs', 'react')
    .replace('vuejs', 'vue')
    .replace('aspnet', 'dot-net')
    .replace('sqlserver', 'microsoftsqlserver')
    .replace('azuredevops', 'azure-devops');

  // Use custom icon if provided
  if (customIcon) {
    return {
      name,
      icon: customIcon
    };
  }

  // Try to get icon from tech-stack-icons
  let icon;
  try {
    const techStackIcon = getIconUrl({ name: normalizedName });
    icon = typeof techStackIcon === 'string' ? techStackIcon : '';
  } catch {
    icon = '';
  }

  // Fallback to devicons if tech-stack-icons doesn't have the icon
  if (!icon) {
    icon = `https://raw.githubusercontent.com/devicons/devicon/master/icons/${normalizedName}/${normalizedName}-original.svg`;
  }

  return {
    name,
    icon
  };
};

// Frontend Technologies
export const frontendTech = [
  createTech('Angular'),
  createTech('TypeScript'),
  createTech('JavaScript'),
  createTech('HTML5'),
  createTech('CSS3'),
  createTech('Tailwind CSS'),
  createTech('Material-UI'),
  createTech('Bootstrap'),
];

// Backend Technologies
export const backendTech = [
  createTech('.NET Core', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg'),
  createTech('C#', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg'),
  createTech('ASP.NET', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg'),
  createTech('Entity Framework', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg'),
  createTech('Dapper', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg'),
  createTech('GraphQL', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg'),
  createTech('gRPC', 'https://grpc.io/img/logos/grpc-icon-color.png'),
  createTech('NUnit', 'https://nunit.org/img/nunit.svg'),
  createTech('xUnit', 'https://raw.githubusercontent.com/xunit/xunit/main/logo.png'),
  createTech('Serilog', 'https://serilog.net/img/serilog-square.png'),
];

// Cloud & DevOps Technologies
export const cloudTech = [
  createTech('Azure', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg'),
  createTech('Docker', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg'),
  createTech('Kubernetes', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg'),
  createTech('Git', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg'),
  createTech('GitHub', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg'),
  createTech('Azure DevOps', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg'),
  createTech('Prometheus', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/prometheus/prometheus-original.svg'),
  createTech('Grafana', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/grafana/grafana-original.svg'),
  createTech('Elasticsearch', 'https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg'),
  createTech('RabbitMQ', 'https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg'),
];

// Database Technologies
export const databaseTech = [
  createTech('SQL Server', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg'),
  createTech('PostgreSQL', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg'),
  createTech('MongoDB', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg'),
  createTech('Redis', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg'),
  createTech('Cosmos DB', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg'),
];

// Testing Technologies
export const testingTech = [
  createTech('Jest', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg'),
  createTech('Cypress', 'https://raw.githubusercontent.com/cypress-io/cypress-icons/master/src/logo/cypress-io-logo-round.svg'),
  createTech('Postman', 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg'),
  createTech('MSTest', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg'),
];

// Architecture & Tools
export const architectureTech = [
  createTech('Microservices', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg'),
  createTech('DDD', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg'),
  createTech('CQRS', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg'),
  createTech('OAuth 2.0', 'https://oauth.net/images/oauth-logo-square.png'),
  createTech('JWT', 'https://jwt.io/img/pic_logo.svg'),
  createTech('Swagger', 'https://raw.githubusercontent.com/swagger-api/swagger.io/wordpress/images/assets/SW-logo-clr.png'),
  createTech('OpenAPI', 'https://www.openapis.org/wp-content/uploads/sites/3/2016/11/favicon.png'),
];

// Group all technologies
export const technologies = {
  frontend: frontendTech,
  backend: backendTech,
  cloud: cloudTech,
  database: databaseTech,
  testing: testingTech,
  architecture: architectureTech,
};
