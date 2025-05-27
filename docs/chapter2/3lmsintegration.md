---
id: chapter2-lmsintegration
title: "Lmsintegration"
description: "Lmsintegration page in Chapter2 of CircuitVerse documentation."
---

# Integrate CircuitVerse with LMS

> You can configure an LTI-compliant learning management system (LMS) to connect to CircuitVerse so that you can import an CircuitVerse assignment for your course and you can access them without leaving your LMS.

> This guide will teach you how to integrate CircuitVerse with LTI supported Learning Management Systems.

## About configuration of your LMS

You can connect a learning management system (LMS) to CircuitVerse, To connect your LMS to CircuitVerse, you must enter configuration credentials for CircuitVerse in your LMS.

**Note:** You and your students must use the same email which is associated with your LMS as CircuitVerse account's email.If you don't have an account please create one at [CircuitVerse Sign Up](https://circuitverse.org/users/sign_up).

## Prerequisites

To connect LMS with CircuitVerse, you must have at least one assignment in your CircuitVerse group which is LTI enabled. Just check the **Integrate with LMS** button while creating an assignment in CircuitVerse.You can also update an existing assignment to enable LTI just by checking the box **Integrate with LMS**.

## Supported LMSs

CircuitVerse supports LMSes that implement Learning Tools Interoperability (LTI) standards.

- LTI version 1.0 and/or 1.1
- LTI Names and Roles Provisioning 1.X

Using LTI helps keep your information safe and secure. LTI is an industry-standard protocol and CircuitVerse's use of LTI is certified by the Instructional Management System (IMS) Global Learning Consortium. For more information, see [Learning Tools Interoperability](https://www.imsglobal.org/activity/learning-tools-interoperability) and [About IMS Global Learning Consortium](http://www.imsglobal.org/aboutims.html) on the IMS Global Learning Consortium website.

CircuitVerse tested linking of assignments with the following LMSs:

- Moodle
- Canvas
- Sakai

## Generating configuration credentials

1. Login to CircuitVerse account and go to the corresponding Group in which you want to create an assignment.
2. Click on the **+Add Assignment** button.
3. Check the **Integrate with LMS** box.

   ![Integrate with LMS](/img/img_chapter2/lms_integration/lms_checkbox.png)

4. Fill in the required fields and click **Create Assignment**.
5. After successful creation of an assignment, you will be redirected to the Group page and you will see the **Show LMS Credentials** link on the assignment which you have just created.

   ![Show LMS Credentials](/img/img_chapter2/lms_integration/show_lms_link.png)

6. Click on the link and you will see the LMS configuration in the pop-up.

   ![Tool Keys](/img/img_chapter2/lms_integration/tool_key.png)

7. Copy the **Consumer Key**, **Shared Secret**, and **Tool URL** for the connection of the assignment in your LMS.

## Configuring an generic LMS

You must configure the privacy settings for your LMS to allow external tools to receive user's information.

1. Navigate to your LMS.
2. Add an external tool.
3. Provide the configuration credentials you generated in CircuitVerse during creation of an assignment.
   - Consumer key
   - Shared secret
   - Tool URL (sometimes called **Launch URL** or similar)

## Configuring Moodle

You can configure a CircuitVerse assignment in Moodle using the following steps:

1. Login to Moodle.
2. Select the Moodle course to integrate with CircuitVerse.
3. Click **Turn editing on**.
4. Wherever you'd like CircuitVerse to be available in Moodle, click **Add an activity or resource**.
5. Choose **External tool** and click **Add**.
6. In the **Activity name** field, type **CircuitVerse Assignment-your_assignment_name**.
7. Under **External tool configuration**, paste the configuration credentials from CircuitVerse. For more information, read the section **Generating configuration credentials**.

| Field in Moodle app configuration | Value or setting                                          |
| --------------------------------- | --------------------------------------------------------- |
| Tool name                         | _CircuitVerse Assignment-your_assignment_name_ or Similar |
| Tool URL                          | Tool URL from CircuitVerse assignment                     |
| Consumer key                      | Consumer key from CircuitVerse assignment                 |
| Shared secret                     | Shared secret from CircuitVerse assignment                |

- In the **Privacy** section check the following checkboxes:
  - Share launcher's name with the tool
  - Share launcher's email with the tool
  - Accept grades from the tool
- Click on **Save and display**.

## Configuring Canvas

You can configure CircuitVerse as an external app for Canvas. For more information about Canvas, see the [Canvas website](https://www.instructure.com/canvas).

1. Login to Canvas
2. Select the Canvas course to integrate with CircuitVerse.
3. In the left sidebar, click **Settings**.
4. Click the **Apps** tab.
5. Click **View app configurations**.
6. Click **+App**.
7. Select the **Configuration Type** drop-down menu, and click **Manual Entry**.A form will appear, please enter the following information:

| Field in Canvas | Value or setting                                          |
| --------------- | --------------------------------------------------------- |
| Tool name       | _CircuitVerse Assignment-your_assignment_name_ or Similar |
| Consumer key    | Consumer key from CircuitVerse assignment                 |
| Shared secret   | Shared secret from CircuitVerse assignment                |
| Launch URL      | Tool URL from CircuitVerse assignment                     |

- In the **Privacy** field select **Public**.
- Please keep the Custom Fields blank.
- **Optional :** You can add a description for the external tool in the **Description** field.

> After successful completion of the above mentioned steps your assignment will be available in Canvas as an external tool.You can add the assignment to a module of your course by navigating to **Home** in the left sidebar then please click on the **+** button and select **External Tool** in the **Add** filed and you will see the newly installed **CircuitVerse** app there.Just click on the **Add Item** button to add the assignment to the course module.

## Configuring Sakai

1. Login to Sakai.
2. Select **Site Info** from the left sidebar.
3. Click on **External Tools** tab.
4. Click on **Install LTI 1.x Tool** link on the right of that page.
5. Enter the following informations :

| Field in Sakai | Value or setting                                          |
| -------------- | --------------------------------------------------------- |
| Tool title     | _CircuitVerse Assignment-your_assignment_name_ or Similar |
| Button Text    | _CVButton_ or Similar                                     |
| Launch URL     | Tool URL from CircuitVerse assignment                     |
| Launch key     | Consumer key from CircuitVerse assignment                 |
| Launch secret  | Shared secret from CircuitVerse assignment                |

- In **Privacy Settings** please check the all checkboxes.
- In **Services** please check the all checkboxes.

> The steps mentioned above for the Sakai are the mandatory steps for the installation of an **CircuitVerse assignment** as an **LTI 1.x** tool.But there are some of the additional fields, checkboxes which you can use for customizing your tool, but they are not mandatory.

## Common Troubleshooting

> ### Follow the below mentioned steps to solve common issues regarding the LMS integration.

#### 1. CircuitVerse window is not loading inside the LMS.

Please first check the credentials if it is correct or not. If all the credentials are correct, then please check the your LMS host URL , if it is not a `https://` connection then either configure `SSL` in your LMS host or select the `Open Tool in a new window` option in the LMS while configuring CircuitVerse External Tool.
