export function github()
{
    

    var url = 'https://github.com/Kanishak11'

    var s = window.open(url, '_blank');

    if (s && s.focus)
    {
        s.focus();
    }
    else if (!s)
    {
        window.location.href = url;
    }
}