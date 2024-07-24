class Game:
    def __init__(self):
        self.turn = "X"
        self.tie = False
        self.winner = None
        self.board = {
            "a1": None,
            "b1": None,
            "c1": None,
            "a2": None,
            "b2": None,
            "c2": None,
            "a3": None,
            "b3": None,
            "c3": None,
        }

    def play_game(self):
        print("Game started!")

    def print_board(self):
        board = self.board
        print(f"""
                A   B   C
            1)  {board['a1'] or ' '} | {board['b1'] or ' '} | {board['c1'] or ' '}
                ----------
            2)  {board['a2'] or ' '} | {board['b2'] or ' '} | {board['c2'] or ' '}
                ----------
            3)  {board['a3'] or ' '} | {board['b3'] or ' '} | {board['c3'] or ' '}
        """)

    def print_message(self):
        print("Tie game!")


def play_game():
    game_instance = Game()
    game_instance.print_message()


if __name__ == "__main__":
    play_game()
