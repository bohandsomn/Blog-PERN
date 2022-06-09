import Activation from './Activation'
import Chat from './Chat'
import Comment from './Comment'
import FollowComment from './FollowComment'
import FollowPost from './FollowPost'
import Message from './Message'
import Photo from './Photo'
import PhotoChat from './PhotoChat'
import Post from './Post'
import Subscribe from './Subscribe'
import Subscription from './Subscription'
import Token from './Token'
import User from './User'
import UserChat from './UserChat'

User.hasOne(Photo, {foreignKey: 'user_id', onDelete: 'cascade'})
Photo.belongsTo(User, {foreignKey: 'user_id', onDelete: 'cascade'})

User.hasOne(Activation, { foreignKey: 'user_id', onDelete: 'cascade' })
Activation.belongsTo(User, { foreignKey: 'user_id', onDelete: 'cascade' })

User.hasOne(Token, { foreignKey: 'user_id', onDelete: 'cascade' })
Token.belongsTo(User, { foreignKey: 'user_id', onDelete: 'cascade' })

User.hasMany(Subscription, { foreignKey: 'user_id', onDelete: 'cascade' })
Subscription.belongsTo(User, { foreignKey: 'user_id', onDelete: 'cascade' })

User.hasMany(Subscription, { foreignKey: 'subscriber_id', onDelete: 'cascade' })
Subscription.belongsTo(User, { foreignKey: 'subscriber_id', onDelete: 'cascade' })

User.hasMany(Subscribe, { foreignKey: 'user_id', onDelete: 'cascade' })
Subscribe.belongsTo(User, { foreignKey: 'user_id', onDelete: 'cascade' })

User.hasMany(Subscribe, { foreignKey: 'subscription_id', onDelete: 'cascade' })
Subscribe.belongsTo(User, { foreignKey: 'subscription_id', onDelete: 'cascade' })

User.hasMany(UserChat, { foreignKey: 'user_id', onDelete: 'cascade' })
UserChat.belongsTo(User, { foreignKey: 'user_id' })

Chat.hasMany(UserChat, { foreignKey: 'chat_id', onDelete: 'cascade' })
UserChat.belongsTo(Chat, { foreignKey: 'chat_id', onDelete: 'cascade' })

Message.hasOne(Chat, { foreignKey: 'last_message_id', onDelete: 'cascade' })
Chat.belongsTo(Message, { foreignKey: 'last_message_id', onDelete: 'cascade' })

Chat.hasOne(Message, { foreignKey: 'chat_id', onDelete: 'cascade' })
Message.belongsTo(Chat, { foreignKey: 'chat_id', onDelete: 'cascade' })

User.hasOne(Message, { foreignKey: 'sender_id', onDelete: 'cascade' })
Message.belongsTo(User, { foreignKey: 'sender_id', onDelete: 'cascade' })

User.hasMany(Post, { foreignKey: 'user_id', onDelete: 'cascade' })
Post.belongsTo(User, { foreignKey: 'user_id', onDelete: 'cascade' })

User.hasMany(Comment, { foreignKey: 'user_id', onDelete: 'cascade' })
Comment.belongsTo(User, { foreignKey: 'user_id', onDelete: 'cascade' })

Post.hasOne(Comment, { foreignKey: 'post_id', onDelete: 'cascade' })
Comment.belongsTo(Post, { foreignKey: 'post_id', onDelete: 'cascade' })

User.hasMany(Comment, { foreignKey: 'commentator_id', onDelete: 'cascade' })
Comment.belongsTo(User, { foreignKey: 'commentator_id', onDelete: 'cascade' })

Comment.hasMany(FollowComment, { foreignKey: 'comment_id', onDelete: 'cascade' })
FollowComment.belongsTo(Comment, { foreignKey: 'comment_id', onDelete: 'cascade' })

User.hasOne(FollowComment, { foreignKey: 'commentator_id', onDelete: 'cascade' })
FollowComment.belongsTo(User, { foreignKey: 'commentator_id', onDelete: 'cascade' })

Post.hasMany(FollowPost, { foreignKey: 'post_id', onDelete: 'cascade' })
FollowPost.belongsTo(Post, { foreignKey: 'post_id', onDelete: 'cascade' })

User.hasOne(FollowPost, { foreignKey: 'user_id', onDelete: 'cascade' })
FollowPost.belongsTo(User, { foreignKey: 'user_id', onDelete: 'cascade' })

Chat.hasOne(PhotoChat, { foreignKey: 'chat_id', onDelete: 'cascade' })
PhotoChat.belongsTo(Chat, { foreignKey: 'chat_id', onDelete: 'cascade' })

export {
    Activation,
    Chat,
    Comment,
    FollowComment,
    FollowPost,
    Message,
    Photo,
    PhotoChat,
    Post,
    Subscribe,
    Subscription,
    Token,
    User,
    UserChat
}
