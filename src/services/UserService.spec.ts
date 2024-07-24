import { User, UserService } from "./UserService";

describe('UserService', () => {
    const mockDb: User[] = []
    const userService = new UserService(mockDb);
    const console: User[] = []
    const credentials = new UserService(console)

    it('Deve adicionar um novo usuário', () => {
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.createUser('nath', 'nath@test.com');
        expect(mockConsole).toHaveBeenCalledWith('DB atualizado', mockDb)
    })

    it('Deve verificar si o usuario adicionou nome e email', () =>{
        const mockCredencials = jest.spyOn(global.console, 'log')
        credentials.createUser('Bad requests: inisira um email', 'e um name')
        expect(mockCredencials).toBeTruthy()
    })
})
