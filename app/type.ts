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
    windMph: number,
    windKph: number,
    windDir: string, 
    windDegree: number,
    uv: number,
    visKm: number,
    humidity: number,
    pressureMb: number,
    precipMm: number,
    forecast: Forecast[]    
}

export interface Forecast {
    time: string,
    tempC: number,
    text: string,
    icon: string
}

export interface SearchResult {
    id: number,
    name: string,
    region: string,
    country: string,
    lat: number,
    lon: number,
    url: string
}