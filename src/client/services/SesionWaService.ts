/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SesionWaService {
    /**
     * @param sesionId
     * @returns any Default Response
     * @throws ApiError
     */
    public static getWhatsappSesion(
        sesionId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/whatsapp/sesion',
            query: {
                'sesionID': sesionId,
            },
        });
    }
    /**
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postWhatsappEnviarMensaje(
        body?: {
            sesionID: string;
            mensaje: string;
            telefono: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/whatsapp/enviar-mensaje',
            body: body,
        });
    }
    /**
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postWhatsappEnviarImagen(
        body?: {
            sesionID: string;
            telefono: string;
            url: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/whatsapp/enviar-imagen',
            body: body,
        });
    }
}
