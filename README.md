# NFC 100's Rupee Bank - Mobile Application

## Overview
The NFC 100's Rupee Bank mobile application is a student-focused banking platform designed to facilitate micro-donations, student loans, and financial management. Built with React Native and Expo, this application provides a seamless banking experience for students.

## 🚀 Features

### Authentication
- User registration with profile image upload
- OTP verification system
- Secure login
- Password reset functionality

### Core Banking Features
- Virtual wallet management
- Balance checking
- Money transfer capabilities
- Mobile top-up services

### Student Loan System
- Loan application processing
- Loan status tracking
- EMI payment system
- Loan repayment scheduling

### Donation Platform
- Micro-donation system (100 Rupee donations)
- Donation tracking
- Payment gateway integration
- Donation history

## 📁 Project Structure

```
NFC_BANK Frontend/
├── app/                    # Main application screens
│   ├── (tabs)/            # Tab-based navigation screens
│   ├── amount.tsx         # Donation amount screen
│   ├── login.tsx          # Login screen
│   ├── optVerification.tsx# OTP verification
│   ├── passwordUpdate.tsx # Password update
│   ├── paymentScreen.tsx  # Payment processing
│   ├── personalInfo.tsx   # User information
│   └── signUp.tsx         # Registration screen
├── assets/                # Static assets
│   ├── fonts/            # Custom fonts
│   └── images/           # Image resources
├── components/            # Reusable UI components
│   ├── AuthWrapper.tsx   # Authentication wrapper
│   ├── Header.tsx        # App header
│   └── ui/              # UI components
├── constants/            # App constants
│   ├── Colors.ts        # Color definitions
│   └── Project.Api.js   # API endpoints
├── hooks/               # Custom React hooks
└── Redux/              # State management
    ├── store.js        # Redux store
    └── Slices/        # Redux slices
```

## 🛠 Technology Stack

- **Framework**: React Native with Expo
- **State Management**: Redux Toolkit
- **Navigation**: Expo Router
- **API Integration**: Axios
- **Form Handling**: Formik with Yup validation
- **UI Components**: Native Base
- **Authentication**: JWT with secure storage

## 📱 Screen Descriptions

### 1. Login Screen (`login.tsx`)
- Email and password authentication
- Form validation
- Forgot password option
- Navigation to signup

### 2. Signup Screen (`signUp.tsx`)
- User registration form
- Profile image upload
- Input validation
- OTP verification trigger

### 3. Home Screen (`(tabs)/index.tsx`)
- Account balance display
- Quick actions
- Loan status
- Recent transactions
- Donation options

### 4. Personal Info (`personalInfo.tsx`)
- User profile management
- Personal details form
- Document upload

## 🔒 Security Features

- JWT token authentication
- Secure local storage
- Input validation
- OTP verification
- Protected routes
- Session management

## ⚙️ Setup and Installation

1. **Prerequisites**
   ```bash
   node.js >= 14.x
   npm or yarn
   expo-cli
   ```

2. **Installation**
   ```bash
   # Clone the repository
   git clone [repository-url]

   # Install dependencies
   npm install

   # Start the development server
   npx expo start
   ```

3. **Environment Configuration**
   - Copy `.env.example` to `.env`
   - Update API endpoints and configuration

## 🔄 State Management

The application uses Redux for state management with the following main slices:
- Authentication state
- User profile
- Loan management
- Transaction history
- Donation tracking

## 📱 App Navigation

The app uses Expo Router for navigation with the following structure:
- Stack navigation for auth flow
- Tab navigation for main app
- Modal screens for actions

## 🎨 Styling

- Responsive design using relative units
- Theme-based styling
- Dark mode support
- Platform-specific adaptations

## 🔌 API Integration

- RESTful API consumption
- Axios interceptors for auth
- Error handling
- Loading states
- Offline capability

## 🧪 Testing

```bash
# Run tests
npm test

# Run lint
npm run lint
```

## 📦 Build and Deployment

```bash
# Build for Android
eas build -p android

# Build for iOS
eas build -p ios
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

- Developer: Muhammadrabeet56
- UI/UX: [Team Member]
- Project Lead: [Team Lead]

## 📞 Support

For support, please email [support-email] or raise an issue in the repository.
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
