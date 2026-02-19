import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const isUserSiteRepo = repository === 'sudheer.github.io';

export default defineConfig({
  site: 'https://sudheer.github.io',
  base: isGithubActions && repository && !isUserSiteRepo ? `/${repository}` : '/',
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
