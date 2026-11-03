#include<iostream>
using namespace std;
int main() {
    int num;
    cout<<"Enter mark: ";
    cin>>num;
    if (num >= 80) {
        cout<<"Pass with distinction\n";
    } else if (num >= 40) {
        cout<<"Normal pass\n";
    } else cout<<"Fail\n";
    return 0;
}