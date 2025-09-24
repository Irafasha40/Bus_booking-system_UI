export interface LoginDTO {
  email: string;
  password: string;
}

export interface RegisterDTO {
  username: string;
  email: string;
  password: string;
}

export interface ResetDTO {
  email: string;
  otp: string;
  newPassword: string;
}

export interface AuthResponse {
  token: string;
  user: {
    username: string;
    role: string;
  };
}
export interface TripDTO {
  id: number;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
}

export interface BookingDTO {
  tripId: number;
  userId: number;
  seatNumber: string;
  status: string;
}

