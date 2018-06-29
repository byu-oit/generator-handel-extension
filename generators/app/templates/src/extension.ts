import {
    ExtensionContext,
} from 'handel-extension-api';
import { <%= capitalizedServiceName %>Service } from './service';

export function loadHandelExtension(context: ExtensionContext) {
    context.service('<%= lowerServiceName %>', new <%= capitalizedServiceName%>Service());
}
