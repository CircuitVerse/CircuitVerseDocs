---
id: chapter2-ssointegration
title: "Ssointegration"
description: "Ssointegration page in Chapter2 of CircuitVerse documentation."
---

# Single Sign On Configurations

> Single sign-on (SSO) is an identification method that enables users to log in to multiple applications and websites with one set of credentials. SSO streamlines the authentication process for users.

![About SSO Integration](/img/img_chapter2/sso_integration/about_sso.png)

## Configure CircuitVerse with SAML based SSO using Okta

### Step 1: Configure Okta

This guide provides step-by-step instructions for setting up SAML-based Single Sign-On (SSO) for CircuitVerse using Okta as the Identity Provider (IdP).

1. Log in to your Okta Admin Dashboard.

2. Navigate to "Applications" > "Applications" in the main menu.

   ![Navigate to "Applications" > "Applications" in the main menu.](/img/img_chapter2/sso_integration/navigate_to_applicattion.png)

3. Click on "Create App Integration".

   ![Click on "Create App Integration.](/img/img_chapter2/sso_integration/create_app_integration.png)

4. Select "SAML 2.0" as the Sign-on method and click "Next".

   ![Select "SAML 2.0" as the Sign-on method and click "Next"..](/img/img_chapter2/sso_integration/step_4_select_saml2.0.png)

5. Fill in the following details for your CircuitVerse app:

   - App name: "CircuitVerse" (or your preferred name)
   - App logo: (Optional) Upload CircuitVerse logo

   ![add name and logo](/img/img_chapter2/sso_integration/step5.png)

6. In the "SAML Settings" section, configure the following:

   - Single sign on URL `https://your-circuitverse-domain.com/users/saml/auth`
   - Audience URI (SP Entity ID): `https://your-circuitverse-domain.com/users/saml/metadata`
   - Name ID format: `Transient`
   - Application username: `Email`

   In the image below, the domain `https://localhost:3000` is shown as an example. You should replace it with your own domain.
   ![SAML Settings](/img/img_chapter2/sso_integration/step6.png)

7. Click "Next" and select "I'm an Okta customer adding an internal app".

   ![Click "Next" and select "I'm an Okta customer adding an internal app"](/img/img_chapter2/sso_integration/step7.png)

8. Click "Finish" to create the application.

9. In the "Sign On" tab of your new application, find the "Identity Provider metadata" or "View Setup Instructions" to obtain the following information:

   - Identity Provider Single Sign-On URL
   - Identity Provider Issuer
   - Certificate FingerPrint

   ![Credentials](/img/img_chapter2/sso_integration/credentials.png)

10. You can add users and groups by navigate to Assignment > Assign > Assign to People / Assign to Groups

    ![Assign people/Groups](/img/img_chapter2/sso_integration/Assign.png)

### Step 2: Configure CircuitVerse

1. Create a `.env` file and add the following credentials obtained from configuring Okta:
   - `IDP_SSO_URL=<sso-idp-url>`
   - `IDP_FINGERPRINT=<sso-idp-fingerprint-certificate>`

### Step 3: Enable SSO in CircuitVerse UI

1. Enable the sso_integration feature flag using Flipper (if not already enabled).
2. Verify that the SSO login option appears on the login page.

![Single Sign On Button](/img/img_chapter2/sso_integration/SingleSignOnButton.png)

### Step 4: Test the Integration

1. Log out of CircuitVerse.
2. Click on the "Login with SSO" button on the CircuitVerse login page.
3. You should be redirected to the Okta login page.
4. Enter your Okta credentials.
5. After successful authentication, you should be redirected back to CircuitVerse and logged in.

## Configure CircuitVerse with SAML based SSO using Keycloak

This guide provides step-by-step instructions for setting up SAML-based Single Sign-On (SSO) for CircuitVerse using Keycloak as the Identity Provider (IdP).

### Step 1: Configure Keycloak

1. Go to the Keycloak Admin console UI and sign in as an administrator

   ![Keycloak Admin console](/img/img_chapter2/sso_integration/admin-login-keycloak.webp)

2. Select or create a realm for CircuitVerse.

3. In the left sidebar, click on "Clients" and then click "Create" to add a new client.

   - Client ID: CircuitVerse (or your preferred name)
   - Client Type: Select `SAML`

     ![create a realm for CircuitVerse.](/img/img_chapter2/sso_integration/create-realm-keycloak.png)

4. Click "Save" to create the client.

   ![create client Keycloak.](/img/img_chapter2/sso_integration/create-client-keycloak.png)

5. In the client settings, configure the following:

   - Valid Redirect URIs: https://your-circuitverse-domain.com/
   - Base URL: https://your-circuitverse-domain.com
   - Master SAML Processing URL: https://your-circuitverse-domain.com/users/saml/auth

     In the image below, the domain `https://localhost:3000` is shown as an example. You should replace it with your own
     ![Configurations Details](/img/img_chapter2/sso_integration/client-access-settings-keycloak.png)

6. Go to Clients > Client scopes, and select `{Your-realm-name}` and add predefined mappers such as `Email`

7. Go to Clients > Keys, and turn off the Client signature required option from signing keys config

   ![Client Signature Required](/img/img_chapter2/sso_integration/client-signature-required.png)

8. Create new user which is to be used for login. Be sure to include email id in username and email fields

   ![Create User](/img/img_chapter2/sso_integration/create-user.webp)

### Step 2: Extract Keycloak SAML Credentials

To get the required credentials for CircuitVerse (`IDP_SSO_URL` and `IDP_FINGERPRINT`), follow these steps:

- Open the downloaded XML file in a text editor.
- Find the "SingleSignOnService" tag. The "Location" attribute of this tag is your `IDP_SSO_URL`.
- From this XML file make note of `SAML entity id` and `SAML X.509 certificate`

### Step 3: Configure CircuitVerse

1. Create a `.env` file and add the following credentials obtained from configuring Okta:
   - `IDP_SSO_URL=<sso-idp-url>`
   - `IDP_FINGERPRINT=<sso-idp-fingerprint-certificate>`

### Step 4: Enable SSO in CircuitVerse UI

1. Enable the sso_integration feature flag using Flipper (if not already enabled).
2. Verify that the SSO login option appears on the login page.

![Single Sign On Button](/img/img_chapter2/sso_integration/SingleSignOnButton.png)

### Step 5: Test the Integration

1. Log out of CircuitVerse.
2. Click on the "Login with SSO" button on the CircuitVerse login page.
3. You should be redirected to the Keycloak login page.
4. Enter your KeyCloak credentials.
5. After successful authentication, you should be redirected back to CircuitVerse and logged in.
