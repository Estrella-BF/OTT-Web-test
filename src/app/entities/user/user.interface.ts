export interface IUserAuthGmail {
    additionalUserInfo: IUserInfo;
}

export interface IUserInfo {
    isNewUser: boolean;
    profile: IProfile;
}

export interface IProfile {
    email: string;
    family_name: string;
    given_name: string;
    granted_scopes: string;
    id: string;
    locale: string;
    name: string;
    picture: string;
    verified_email: boolean;
}
