const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Name1',
      room: 'Room1'
    },
    {
      id: '2',
      name: 'Name2',
      room: 'Room2'
    },
    {
      id: '3',
      name: 'Name3',
      room: 'Room1'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: 'id',
      name: 'name',
      room: 'room'
    }
    var res = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '99'
    var user = users.removeUser(userId);
    expect(user).toNotExist()
    expect(users.users.length).toBe(3);
  });

  it('should not remove a user', () => {
    var userId = '2'
    var user = users.removeUser(userId);
    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should find a user', () => {
    var userId = '2'
    var user = users.getUser(userId );
    expect(user.id).toBe(userId );
  });

  it('should not find a user', () => {
    var userId = '4'
    var user = users.getUser(userId);
    expect(user).toNotExist();
  })

  it('should return names for room1', () => {
    var userList = users.getUserList('Room1');
    expect(userList).toEqual(['Name1', 'Name3']);
  });

  it('should return names for room2', () => {
    var userList = users.getUserList('Room2');
    expect(userList).toEqual(['Name2']);
  });

});
