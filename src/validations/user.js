import Joi from '@hapi/joi';
import { NAME_RGP } from '../constans';

// export default Joi.object({
//     firstName: Joi.string().pattern(NAME_RGP),
//     lastName: Joi.string().pattern(NAME_RGP),
//     email: Joi.string().email().required(),
//     login: Joi.string().required(),
//     password: Joi.string().required(),
// })
// .min(1)
// .max(5); 

export default function userSchem(){
    Joi.object({
        firstName: Joi.string().pattern(NAME_RGP),
        lastName: Joi.string().pattern(NAME_RGP),
        email: Joi.string().email().required(),
        login: Joi.string().required(),
        password: Joi.string().required(),
    })
    .min(1)
    .max(5);
} 