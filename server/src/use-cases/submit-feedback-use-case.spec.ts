import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

//spies: check if the unit made the correct calls
const createFeedbackSpy = jest.fn();
const sendEmailSpy = jest.fn();

describe('Submit feedback', () => {
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        { create: createFeedbackSpy },
        { sendMail: sendEmailSpy }
    );

    it('should be able to submit feedback', async () => {
        await expect(submitFeedbackUseCase.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,test.jpg'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendEmailSpy).toHaveBeenCalled();
    });

    it('should not be able to submit feedback without type', async () => {
        await expect(submitFeedbackUseCase.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,test.jpg'
        })).rejects.toThrow();
    });

    it('should not be able to submit feedback without comment', async () => {
        await expect(submitFeedbackUseCase.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,test.jpg'
        })).rejects.toThrow();
    });

    it('should not be able to submit feedback with invalid screenshot', async () => {
        await expect(submitFeedbackUseCase.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'test.jpg'
        })).rejects.toThrow();
    });
});