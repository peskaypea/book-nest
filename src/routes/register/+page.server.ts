import type {Actions} from './$types';

export const actions = {
    default: async ({request}) => {
        const formData = await request.formData();
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const passwordConfirmation = formData.get('passwordConfirmation') as string;
    }
}