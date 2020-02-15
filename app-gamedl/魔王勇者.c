#include<stdio.h>
#include<string.h>
#include<math.h>

int magic = 0;
int mx = -9999;
void magicmatch(int k, int n, int s1[], int s2[])
{
    if (k == n - 1)
    {
        magic = 0;
        for (int i = 0; i < n; i++)
        {
            if (s1[i] < s2[i])
                magic++;
            else if (s1[i] == s2[i])
                continue;
            else if (s1[i] > s2[i])
                magic--;
        }
        if (mx <= magic)
            mx = magic;
    }
    else
    {
        for (int i = k; i < n; i++)
        {
            int temp = s2[k];
            s2[k] = s2[i];
            s2[i] = temp;
            magicmatch(k + 1, n, s1, s2);
            
            temp = s2[k];
            s2[k] = s2[i];
            s2[i] = temp;
        }
    }
}

int main()
{
    int n;
    scanf("%d", &n);
    int s1[100], s2[100];
    for (int i = 0; i < n; i++)
        scanf("%d", &s1[i]);
    for (int i = 0; i < n; i++)
        scanf("%d", &s2[i]);
    magicmatch(0, n, s1, s2);
    printf("%d", mx);
}