# Cloudflare Pages Deployment Setup

To enable automated deployments, you need to configure a few things in Cloudflare and GitHub.

## 1. Get Cloudflare Credentials

1.  **Log in to Cloudflare Dashboard**: Go to [dash.cloudflare.com](https://dash.cloudflare.com).
2.  **Account ID**:
    *   Go to the **Workers & Pages** section.
    *   On the right sidebar, find your **Account ID** and copy it.
3.  **API Token**:
    *   Go to **My Profile** > **API Tokens**.
    *   Click **Create Token**.
    *   Use the **Cloudflare Pages** template (or create a custom one with `Account.Cloudflare Pages:Edit` permissions).
    *   Copy the generated API Token.

## 2. Create Project (Optional but Recommended)

You can let the GitHub Action create the project, but creating it manually gives you more control initially.

1.  Go to **Workers & Pages** > **Create application** > **Pages** > **Create using direct upload**.
2.  Name the project `uuidify-web`.
3.  (You don't need to upload assets manually, the Action will do it).

## 3. Configure GitHub Secrets

1.  Go to your GitHub repository.
2.  Navigate to **Settings** > **Secrets and variables** > **Actions**.
3.  Click **New repository secret**.
4.  Add the following secrets:
    *   `CLOUDFLARE_ACCOUNT_ID`: Paste your Account ID.
    *   `CLOUDFLARE_API_TOKEN`: Paste your API Token.

## 4. Deploy

Simply push your changes to the `main` branch. The GitHub Action will trigger, build your site, and deploy it to Cloudflare Pages.
