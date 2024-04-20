/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IntegrantesService {
    /**
     * @param authorization
     * @returns any Default Response
     * @throws ApiError
     */
    public static getIntegrantes(
        authorization: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/integrantes/',
            headers: {
                'authorization': authorization,
            },
        });
    }
    /**
     * @param authorization
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static putIntegrantes(
        authorization: string,
        body?: {
            usuario: {
                nombre?: string;
                apellido?: string;
                segundoApellido?: string;
                correo?: string;
                telefono?: string;
                password?: string;
                verificado?: boolean;
            };
            usuarioID: number;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/integrantes/',
            headers: {
                'authorization': authorization,
            },
            body: body,
        });
    }
    /**
     * @param authorization
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postIntegrantesInvitarUsuario(
        authorization: string,
        body?: {
            usuario: {
                nombre: string;
                apellido: string;
                segundoApellido: string;
                correo: string;
                telefono: string;
                password: string;
                verificado: boolean;
            };
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/integrantes/invitar_usuario',
            headers: {
                'authorization': authorization,
            },
            body: body,
        });
    }
}
