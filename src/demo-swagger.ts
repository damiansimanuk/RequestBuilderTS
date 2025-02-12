/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/security/register": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["PostSecurityRegister"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/security/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["PostSecurityLogin"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/security/refresh": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["PostSecurityRefresh"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/security/confirmEmail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["GetSecurityConfirmEmail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/security/resendConfirmationEmail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["PostSecurityResendConfirmationEmail"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/security/forgotPassword": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["PostSecurityForgotPassword"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/security/resetPassword": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["PostSecurityResetPassword"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/security/manage/2fa": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["PostSecurityManage2fa"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/security/manage/info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["GetSecurityManageInfo"];
        put?: never;
        post: operations["PostSecurityManageInfo"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/security/Logout": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["PostSecurityLogout"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        HttpValidationProblemDetails: components["schemas"]["ProblemDetails"] & ({
            errors?: {
                [key: string]: string[];
            };
        } & {
            [key: string]: unknown;
        });
        ProblemDetails: {
            type?: string | null;
            title?: string | null;
            /** Format: int32 */
            status?: number | null;
            detail?: string | null;
            instance?: string | null;
        } & {
            [key: string]: unknown;
        };
        RegisterRequest: {
            email?: string;
            password?: string;
        };
        AccessTokenResponse: {
            tokenType?: string;
            accessToken?: string;
            /** Format: int64 */
            expiresIn?: number;
            refreshToken?: string;
        };
        LoginRequest: {
            email?: string;
            password?: string;
            twoFactorCode?: string | null;
            twoFactorRecoveryCode?: string | null;
        };
        RefreshRequest: {
            refreshToken?: string;
        };
        ResendConfirmationEmailRequest: {
            email?: string;
        };
        ForgotPasswordRequest: {
            email?: string;
        };
        ResetPasswordRequest: {
            email?: string;
            resetCode?: string;
            newPassword?: string;
        };
        TwoFactorResponse: {
            sharedKey?: string;
            /** Format: int32 */
            recoveryCodesLeft?: number;
            recoveryCodes?: string[] | null;
            isTwoFactorEnabled?: boolean;
            isMachineRemembered?: boolean;
        };
        TwoFactorRequest: {
            enable?: boolean | null;
            twoFactorCode?: string | null;
            resetSharedKey?: boolean;
            resetRecoveryCodes?: boolean;
            forgetMachine?: boolean;
        };
        InfoResponse: {
            email?: string;
            isEmailConfirmed?: boolean;
        };
        InfoRequest: {
            newEmail?: string | null;
            newPassword?: string | null;
            oldPassword?: string | null;
        };
        TourCreated: components["schemas"]["IntegrationEventBase"] & {
            /** Format: int32 */
            tourId?: number;
            tourName?: string;
            description?: string;
        };
        IntegrationEventBase: components["schemas"]["DomainEventBase"] & Record<string, never>;
        DomainEventBase: components["schemas"]["EventBase"] & {
            isIntegration?: boolean;
            /** Format: date-time */
            createdAt?: string;
        };
        EventBase: {
            eventName?: string;
            eventId?: string;
        };
        TourDto: {
            /** Format: int32 */
            id?: number;
            name?: string;
            description?: string;
            userId?: string;
            /** Format: date-time */
            createdAt?: string;
            /** Format: date-time */
            updatedAt?: string;
            active?: boolean;
        };
        CreateTourRequest: {
            failure?: boolean;
            exception?: boolean;
            name?: string;
            description?: string;
        };
        Service: Record<string, never>;
        GetTourListRequest: {
            filterText?: string;
            pagination?: components["schemas"]["Pagination"];
        };
        Pagination: {
            /** Format: int32 */
            rowsPerPage?: number;
            /** Format: int32 */
            rowsOffset?: number;
            /** Format: int32 */
            page?: number;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    PostSecurityRegister: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["RegisterRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HttpValidationProblemDetails"];
                };
            };
        };
    };
    PostSecurityLogin: {
        parameters: {
            query?: {
                useCookies?: boolean | null;
                useSessionCookies?: boolean | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["LoginRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AccessTokenResponse"];
                };
            };
        };
    };
    PostSecurityRefresh: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["RefreshRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AccessTokenResponse"];
                };
            };
        };
    };
    GetSecurityConfirmEmail: {
        parameters: {
            query?: {
                userId?: string | null;
                code?: string | null;
                changedEmail?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PostSecurityResendConfirmationEmail: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ResendConfirmationEmailRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PostSecurityForgotPassword: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ForgotPasswordRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HttpValidationProblemDetails"];
                };
            };
        };
    };
    PostSecurityResetPassword: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ResetPasswordRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HttpValidationProblemDetails"];
                };
            };
        };
    };
    PostSecurityManage2fa: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["TwoFactorRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TwoFactorResponse"];
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HttpValidationProblemDetails"];
                };
            };
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GetSecurityManageInfo: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InfoResponse"];
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HttpValidationProblemDetails"];
                };
            };
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PostSecurityManageInfo: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["InfoRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InfoResponse"];
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HttpValidationProblemDetails"];
                };
            };
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PostSecurityLogout: {
        parameters: {
            query: {
                returnUrl: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
