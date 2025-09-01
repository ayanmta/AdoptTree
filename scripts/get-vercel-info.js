#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Getting Vercel project information...\n');

try {
  // Check if vercel is installed
  execSync('vercel --version', { stdio: 'pipe' });
} catch (error) {
  console.log('❌ Vercel CLI not found. Installing...');
  execSync('npm install -g vercel', { stdio: 'inherit' });
}

try {
  // Check if project is linked
  const vercelJsonPath = path.join(process.cwd(), '.vercel', 'project.json');
  
  if (!fs.existsSync(vercelJsonPath)) {
    console.log('🔗 Linking project to Vercel...');
    console.log('Please follow the prompts to link your project.');
    execSync('vercel link', { stdio: 'inherit' });
  }

  // Read project info
  const projectInfo = JSON.parse(fs.readFileSync(vercelJsonPath, 'utf8'));
  
  console.log('✅ Vercel Project Information:');
  console.log('================================');
  console.log(`Project ID: ${projectInfo.projectId}`);
  console.log(`Org ID: ${projectInfo.orgId}`);
  console.log(`Project Name: ${projectInfo.projectName}`);
  console.log('');
  
  console.log('🔑 Next Steps:');
  console.log('1. Go to https://vercel.com/account/tokens');
  console.log('2. Create a new token');
  console.log('3. Add these secrets to your GitHub repository:');
  console.log('');
  console.log('   VERCEL_TOKEN=your_token_here');
  console.log(`   VERCEL_ORG_ID=${projectInfo.orgId}`);
  console.log(`   VERCEL_PROJECT_ID=${projectInfo.projectId}`);
  console.log('');
  console.log('4. Push your changes to trigger deployment!');
  
} catch (error) {
  console.error('❌ Error:', error.message);
  console.log('');
  console.log('🔧 Manual Setup:');
  console.log('1. Run: vercel login');
  console.log('2. Run: vercel link');
  console.log('3. Run this script again');
}
