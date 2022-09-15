import { mergeTypeDefs } from '@graphql-tools/merge';

import SDLInputs from './sdl-inputs';
import Chat from './Chat/typeDefs';
import Message from './Message/typeDefs';
import User from './User/typeDefs';

export default mergeTypeDefs([SDLInputs, Chat, Message, User]);
