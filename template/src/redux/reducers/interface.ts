export interface IGeneralState {
    isGuest: boolean;
    language: 'en' | 'es' | 'fr' | 'ur';
    accessToken?: string | null;
    refreshToken?: string | null;
    tempToken?: string | null;
}