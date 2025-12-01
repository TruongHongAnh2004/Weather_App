export interface WeatherAPI {
    name: string,
    tempC: number,
    text: string,
    icon: string,
    last_updated: string,
    sunrise: string,
    sunset: string,
    moonrise: string,
    moon_phase: string,
    forecast: Forecast[]    
}

export interface Forecast {
    time: string,
    tempC: number,
    text: string,
    icon: string
}