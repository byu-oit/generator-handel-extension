import {
    DeployContext,
    PreDeployContext,
    ServiceConfig,
    ServiceContext,
    ServiceDeployer,
    UnDeployContext
} from 'handel-extension-api';

const SERVICE_NAME = '<%= upperServiceName %>';

export class <%= capitalizedServiceName %>Service implements ServiceDeployer {

    // Set each array to have zero or more output types that this service consumes and produces
    public readonly consumedDeployOutputTypes = [];
    public readonly producedDeployOutputTypes = [];

    // Set this to have zero or more services that this can produce events to
    public readonly producedEventsSupportedServices = [];

    // Set this to false if the resources you're deploying don't support tagging
    public readonly supportsTagging = true;

    public check(serviceContext: ServiceContext<ServiceConfig>, dependenciesServiceContexts: Array<ServiceContext<ServiceConfig>>): string[] {
        console.log('Implement check phase here!');
        return [];
    }

    // Implement the preDeploy phase if your service uses security groups

    // Implement the bind phase if your service will add ingress rules to its security group from other services

    public async deploy(ownServiceContext: ServiceContext<ServiceConfig>, ownPreDeployContext: PreDeployContext, dependenciesDeployContexts: DeployContext[]): Promise<DeployContext> {
        console.log('Implement deploy phase here!');
        return new DeployContext(ownServiceContext);
    }

    public async unDeploy(ownServiceContext: ServiceContext<ServiceConfig>): Promise<UnDeployContext> {
        console.log('Implement unDeploy phase here!');
        return new UnDeployContext(ownServiceContext);
    }

    // Implement unPreDeploy if you created security groups in the preDeploy phase
}
