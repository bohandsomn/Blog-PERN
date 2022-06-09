import type Photo from '../../../../server/src/APIRoutes/photo/request'
import type OmitUser from '../../types/Utility/OmitUser'

namespace Request {
    export type Set = OmitUser<Photo.Set>
    export type Update = OmitUser<Photo.Update>
    export type GetOne = OmitUser<Photo.Delete>
    export type Delete = Photo.GetOneQuery
} 

export default Request