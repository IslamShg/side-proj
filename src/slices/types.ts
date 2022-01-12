export type userDataType = {
  uid: string | null
  displayName: string | null
  email: string | null
  phoneNumber: string | null
  photoURL: string | null
  emailVerified?: boolean
  userMetadata?: {
    createdAt?: string
    creationTime?: string
    lastLoginAt?: string
    lastSignInTime?: string
    lastAuthTime?: number
  }
}
