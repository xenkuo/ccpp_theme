#include <algorithm>
#include <iostream>
#include <memory>
#include <string>
#include <vector>

using namespace std;

struct Complex
{
    Complex(double r, double i) : re(r), im(i) {}
    Complex operator+(Complex &other);
    void Display() { cout << re << ", " << im << endl; }

private:
    double re, im;
};

// Operator overloaded using a member function
Complex Complex::operator+(Complex &other)
{
    int i = 0;
    int *j = &i;
    return Complex(re + other.re, im + other.im);
}

template <typename T>
T minimum(const T &lhs, const T &rhs)
{
    return lhs < rhs ? lhs : rhs;
}

int op_overloading_template_sample()
{
    Complex a = Complex(1.2, 3.4);
    Complex b = Complex(5.6, 7.8);
    Complex c = Complex(0.0, 0.0);

    c = a + b;
    c.Display();

    uint8_t i = 8, j = 7;
    int k = minimum<int>(i, j);
    cout << k << endl;

    return k;
}

int globalVar = 3;
static int staticGlobalVar = 4;
const int fileConst = 3;
class Account
{
public:
    Account(double d) { _balance = d; }
    virtual ~Account() {}
    virtual double GetBalance() { return _balance; }
    virtual void PrintBalance() { cerr << "Error. Balance not available for base type." << endl; }
    void PrintBalancex() { cerr << "Error. Balance not available for base type." << endl; }
    int Count;
    static int StaticCount;
    const static int ConstStaticCount;
    static int Calculate(int a, double d)
    {
        shared_ptr<string> p1;
        if (p1 && p1->empty() && (d == 3))
        {
            *p1 = "hi";
        }
        return 0;
    }

private:
    double _balance;
};

class CheckingAccount : public Account
{
public:
    CheckingAccount(double d) : Account(d) {}
    void PrintBalance() { cout << "Checking account balance: " << GetBalance() << endl; }
};

void testGlobal(void)
{
    printf("hi");
}
static void testStatic(void)
{
    printf("hello");
}
int class_virtual_static_sample()
{
    // Create objects of type CheckingAccount and SavingsAccount.
    CheckingAccount checking(100.00);

    // Call PrintBalance using a pointer to Account.
    Account *pAccount = &checking;
    pAccount->PrintBalance();
    pAccount->StaticCount = 10;
    pAccount->Count = 3;
    pAccount->Calculate(3, 3.2);
    pAccount->PrintBalancex();
    testStatic();
    testGlobal();
    return 0;
}
