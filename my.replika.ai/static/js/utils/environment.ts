type Environment = 'production' | 'testing' | 'dev' | 'localhost';

const ENV_MAP = {
  'my.replika.ai': 'production',
  'my-testing.replika.ai': 'testing',
  localhost: 'localhost'
};

export function getEnvironment(): Environment {
  const { hostname } = window.location;
  return ENV_MAP[hostname] || 'dev';
}

export function isEnvironment(...envs: Environment[]): boolean {
  const env = getEnvironment();

  return envs.indexOf(env) !== -1;
}
