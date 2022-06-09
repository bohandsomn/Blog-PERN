type CreateEmmiter<Event> = (event: Event) => () => void | Promise<void>

export default CreateEmmiter
