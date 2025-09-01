# 🚀 Vercel & GitHub Actions Deployment Guide

This guide shows you how to deploy your Baghari Farm website using Vercel (easiest) or GitHub Actions (more control).

## 🎯 **Option 1: Vercel (Recommended - 5 minutes)**

Vercel is the easiest way to deploy Next.js applications. It's created by the same team as Next.js!

### **Step 1: Deploy to Vercel**

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up with your GitHub account**
3. **Click "New Project"**
4. **Import your repository**: `ayanmta/AdoptTree`
5. **Click "Deploy"**

**That's it!** 🎉 Your site will be live in 2-3 minutes.

### **Step 2: Configure Environment Variables**

In your Vercel dashboard:

1. Go to your project settings
2. Click "Environment Variables"
3. Add these variables:

```bash
NEXTAUTH_SECRET=your-super-secret-key-here
NEXTAUTH_URL=https://your-project.vercel.app
```

### **Step 3: Custom Domain (Optional)**

1. In Vercel dashboard, go to "Domains"
2. Add your domain (e.g., `bagharifarm.com`)
3. Follow DNS instructions
4. SSL is automatically configured! 🔒

### **Step 4: Automatic Deployments**

Every time you push to GitHub:
- ✅ Vercel automatically builds and deploys
- ✅ Preview deployments for pull requests
- ✅ Rollback to previous versions

---

## 🚀 **Option 2: GitHub Actions (More Control)**

GitHub Actions gives you more control and can deploy to multiple platforms.

### **Step 1: Set Up GitHub Secrets**

In your GitHub repository:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add these secrets:

#### **For Vercel:**
```bash
VERCEL_TOKEN=your-vercel-token
VERCEL_ORG_ID=your-org-id
VERCEL_PROJECT_ID=your-project-id
```

#### **For Docker Hub:**
```bash
DOCKER_USERNAME=your-docker-username
DOCKER_PASSWORD=your-docker-password
```

#### **For Server Deployment:**
```bash
SERVER_HOST=your-server-ip
SERVER_USERNAME=your-server-username
SERVER_SSH_KEY=your-private-ssh-key
```

### **Step 2: Get Vercel Tokens**

1. Go to [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Create a new token
3. Copy the token to GitHub secrets

### **Step 3: Get Project IDs**

1. In Vercel dashboard, go to your project
2. Go to Settings → General
3. Copy:
   - **Project ID**
   - **Team ID** (if using team)

### **Step 4: Test Deployment**

Push to main branch:
```bash
git add .
git commit -m "test: GitHub Actions deployment"
git push origin main
```

Check the Actions tab in GitHub to see the deployment progress!

---

## 📊 **Comparison: Vercel vs GitHub Actions**

| Feature | Vercel | GitHub Actions |
|---------|--------|----------------|
| **Setup Time** | 5 minutes | 15 minutes |
| **Difficulty** | Beginner | Intermediate |
| **Cost** | Free tier | Free tier |
| **Custom Domain** | ✅ Automatic SSL | ✅ Manual setup |
| **Preview Deployments** | ✅ Automatic | ✅ Configurable |
| **Rollbacks** | ✅ One click | ✅ Manual |
| **Multiple Platforms** | ❌ Vercel only | ✅ Any platform |
| **Custom Build Process** | ❌ Limited | ✅ Full control |

---

## 🎯 **Quick Start Commands**

### **Vercel CLI (Alternative)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### **GitHub Actions**
```bash
# Just push to main branch
git push origin main

# Check deployment status
# Go to GitHub → Actions tab
```

---

## 🔧 **Environment Variables**

### **Required Variables:**
```bash
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=https://your-domain.com
```

### **Optional Variables:**
```bash
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

---

## 🚨 **Troubleshooting**

### **Vercel Issues:**

1. **Build Fails**
   ```bash
   # Check build logs in Vercel dashboard
   # Common issues: missing dependencies, build errors
   ```

2. **Environment Variables**
   ```bash
   # Make sure all required env vars are set
   # Check Vercel dashboard → Settings → Environment Variables
   ```

3. **Domain Issues**
   ```bash
   # Check DNS settings
   # Wait 24-48 hours for DNS propagation
   ```

### **GitHub Actions Issues:**

1. **Secrets Not Found**
   ```bash
   # Check GitHub repository settings
   # Make sure secrets are named correctly
   ```

2. **Deployment Fails**
   ```bash
   # Check Actions tab for error logs
   # Verify all secrets are set
   ```

---

## 📈 **Performance Optimization**

### **Vercel Optimizations:**
- ✅ Automatic image optimization
- ✅ Edge functions
- ✅ Global CDN
- ✅ Automatic caching

### **GitHub Actions Optimizations:**
- ✅ Caching dependencies
- ✅ Parallel jobs
- ✅ Conditional deployments

---

## 🎉 **Success!**

After deployment, your site will be available at:

- **Vercel**: `https://your-project.vercel.app`
- **Custom Domain**: `https://yourdomain.com`

### **Next Steps:**
1. ✅ Test all features
2. ✅ Set up monitoring
3. ✅ Configure analytics
4. ✅ Set up backups

---

## 🆘 **Need Help?**

### **Vercel Support:**
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

### **GitHub Actions Support:**
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Community](https://github.com/vercel/vercel/discussions)

---

**🎯 Recommendation for Beginners:**
**Start with Vercel** - it's the easiest and most reliable option for Next.js applications!

Happy deploying! 🚀
