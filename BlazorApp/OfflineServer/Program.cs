using System;
using System.Reflection;

namespace OfflineServer;

public static class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Initializing Offline Server...");

        AppDomain.CurrentDomain.AssemblyResolve += CurrentDomainOnAssemblyResolve;

        Console.WriteLine("Offline Server Initialized.");
    }

    private static Assembly CurrentDomainOnAssemblyResolve(object sender, ResolveEventArgs args)
    {
        Console.WriteLine($"Resolve Assembly: {args.Name}");

        return null;
    }
}