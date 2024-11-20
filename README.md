# SOLID Principle

Q. What is SOLID Principle?

The SOLID principles are a set of five design principles in object-oriented programming that help make software more understandable, flexible, and maintainable. Here’s a simple breakdown of each:

1. S - Single Responsibility Principle (SRP)
  A class should have only one reason to change, meaning it should only have one job or responsibility. This makes the code easier to maintain because each class focuses on a single task.

  Example:
  If you have a class that handles both user data and the printing of reports, it should be split into two separate classes: one for user data and one for handling reports.

2. O - Open/Closed Principle (OCP)
  Software should be open for extension but closed for modification. This means you can add new features without changing existing code.

  Example:
  If you have a class that calculates discounts, you should be able to add new types of discounts (e.g., seasonal discounts) without modifying the existing discount class.

3. L - Liskov Substitution Principle (LSP)
  Objects of a subclass should be able to replace objects of the parent class without affecting the correctness of the program. In other words, a subclass should be substitutable for its parent.

  Example:
  If you have a Bird class and a Penguin subclass, the Penguin should still behave like a Bird and not break the functionality, even though penguins can't fly.

4. I - Interface Segregation Principle (ISP)
  Clients should not be forced to depend on interfaces they don’t use. It’s better to have many small, specific interfaces than one large, general-purpose interface.

  Example:
  If you have a class that handles both flying and swimming, but some objects only need to fly, don’t make them implement both interfaces. Instead, create separate Flyable and Swimmable interfaces.

5. D - Dependency Inversion Principle (DIP)
  High-level modules should not depend on low-level modules. Both should depend on abstractions (interfaces). This promotes flexibility and decouples code.

  Example:
  Instead of having a class directly create an instance of a Database class, you inject the database dependency via an interface. This way, you can change the database type without affecting the higher-level classes.