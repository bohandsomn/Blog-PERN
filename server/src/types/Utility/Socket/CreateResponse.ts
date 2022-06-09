import type CreateResponseUtility from '../CreateResponse'

type CreateResponse<Data> = (template: CreateResponseUtility<Data>) => Promise<void>

export default CreateResponse
