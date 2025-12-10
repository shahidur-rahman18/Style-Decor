import React from 'react';

const Contact = () => {
    return (
        <div>
            Contact layout

            <div class="space-y-6" style="opacity: 1; transform: none;">
                <h2 class="text-2xl font-display font-semibold">Contact Information</h2>
                <p class="text-muted-foreground">
                    Reach out to us through any of the following channels. We're here to help!
                    </p>
                    <div class="space-y-6">
                        <div class="flex gap-4">
                            <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                            <svg 
                            xmlns="http://www.w3.org/2000/svg"
                             width="24" height="24"
                              viewBox="0 0 24 24" fill="none"
                               stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" 
                                class="lucide lucide-map-pin h-5 w-5 text-accent">
                                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                                        </path><circle cx="12" cy="10" r="3">
                                            </circle>
                                            </svg>
                                            </div>
                                            <div>
                                                <h4 class="font-semibold mb-1">Visit Us</h4>
                                                <p class="text-sm text-muted-foreground">123 Design Street</p>
                                                <p class="text-sm text-muted-foreground">Creative City, 12345</p>
                                                </div>
                                                </div>
                                                <div class="flex gap-4">
                                                    <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                                    width="24" height="24" viewBox="0 0 24 24"
                                                     fill="none" stroke="currentColor"
                                                      stroke-width="2" stroke-linecap="round" 
                                                      stroke-linejoin="round" 
                                                      class="lucide lucide-phone h-5 w-5 text-accent">
                                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                                            </path></svg></div><div><h4 class="font-semibold mb-1">Call Us</h4><p class="text-sm text-muted-foreground">+1 (555) 123-4567</p><p class="text-sm text-muted-foreground">+1 (555) 987-6543</p></div></div><div class="flex gap-4"><div class="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-5 w-5 text-accent"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></div><div><h4 class="font-semibold mb-1">Email Us</h4><p class="text-sm text-muted-foreground">hello@styledecor.com</p><p class="text-sm text-muted-foreground">support@styledecor.com</p></div></div><div class="flex gap-4"><div class="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock h-5 w-5 text-accent"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div><div><h4 class="font-semibold mb-1">Working Hours</h4><p class="text-sm text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p><p class="text-sm text-muted-foreground">Sunday: Closed</p>
            </div></div></div></div>
        </div>
    );
};

export default Contact;